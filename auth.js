(() => {
  "use strict";
  const protectedPage = document.body.hasAttribute("data-protected");
  const portfolio = document.getElementById("portfolio");
  const gate = document.getElementById("gate-status");
  const feedback = document.getElementById("auth-feedback");
  const form = document.getElementById("auth-form");
  const panel = document.getElementById("login-panel");
  const sessionActions = document.getElementById("session-actions");
  const submit = document.getElementById("submit");
  const config = window.PORTFOLIO_CONFIG || {};
  let mode = "login";
  let client;
  let ready = false;
  let expiryTimer;
  const tell = (message) => {
    if (feedback) { feedback.hidden = false; feedback.textContent = message; }
  };
  const toLogin = () => {
    if (portfolio) portfolio.hidden = true;
    location.replace("login.html");
  };
  const showSession = (session) => {
    clearTimeout(expiryTimer);
    if (protectedPage) {
      if (!session || session.expires_at * 1000 <= Date.now()) { toLogin(); return; }
      portfolio.hidden = false;
      gate.hidden = true;
      expiryTimer = setTimeout(checkSession, Math.min(Math.max(1000, session.expires_at * 1000 - Date.now()), 2147483647));
    } else {
      panel.hidden = !!session;
      sessionActions.hidden = !session;
    }
  };
  async function checkSession() {
    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      showSession(data.session);
    } catch {
      if (protectedPage) toLogin();
      else tell("We couldn't check your session. Please refresh and try again.");
    }
  }
  const formControls = () => form ? [...form.elements] : [];
  formControls().forEach(control => { control.disabled = true; });
  document.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => {
      mode = button.dataset.mode;
      document.querySelectorAll("[data-mode]").forEach(item => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      submit.textContent = mode === "signup" ? "Sign up" : "Log in";
      document.getElementById("password").autocomplete = mode === "signup" ? "new-password" : "current-password";
      tell(ready ? "" : "Account access is awaiting the site's Supabase setup.");
    });
  });
  if (form) form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!ready) { tell("Account access is awaiting the site's Supabase setup."); return; }
    formControls().forEach(control => { control.disabled = true; });
    tell(mode === "signup" ? "Creating your account…" : "Logging in…");
    const credentials = {
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value
    };
    try {
      const result = mode === "signup"
        ? await client.auth.signUp({ ...credentials, options: { emailRedirectTo: new URL("login.html", location.href).href } })
        : await client.auth.signInWithPassword(credentials);
      if (result.error) {
        tell(result.error.message || "Account access failed. Please try again.");
        return;
      }
      document.getElementById("password").value = "";
      if (result.data.session) location.assign("index.html");
      else tell("Check your email to confirm your account, then return here to log in.");
    } catch {
      tell("We couldn't connect. Check your connection and try again.");
    } finally {
      formControls().forEach(control => { control.disabled = false; });
    }
  });
  document.querySelectorAll("[data-logout]").forEach(button => {
    button.addEventListener("click", async () => {
      button.disabled = true;
      try {
        const { error } = await client.auth.signOut({ scope: "local" });
        if (error) throw error;
        toLogin();
      } catch { tell("We couldn't log you out. Please try again."); button.disabled = false; }
    });
  });
  async function start() {
    if (!config.supabaseUrl || !config.supabasePublishableKey) {
      if (protectedPage) toLogin();
      else tell("Account access is awaiting the site's Supabase setup.");
      return;
    }
    if (!/^https:\/\//.test(config.supabaseUrl) || !config.supabasePublishableKey.startsWith("sb_publishable_")) {
      if (protectedPage) toLogin();
      else tell("Account access needs a valid public Supabase URL and publishable browser key.");
      return;
    }
    if (!window.supabase) {
      if (protectedPage) toLogin();
      else tell("The login service couldn't load. Check your connection and refresh.");
      return;
    }
    try {
      client = window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey);
      client.auth.onAuthStateChange((_event, session) => showSession(session));
      await checkSession();
      ready = true;
      formControls().forEach(control => { control.disabled = false; });
      window.addEventListener("pageshow", checkSession);
      document.addEventListener("visibilitychange", () => { if (!document.hidden) checkSession(); });
    } catch {
      if (protectedPage) toLogin();
      else tell("The login service couldn't start. Please refresh and try again.");
    }
  }
  start();
})();