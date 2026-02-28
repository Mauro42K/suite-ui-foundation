import { SuiteAuthShell } from "./suite-auth/SuiteAuthShell";

export function ExampleLogin() {
  return (
    <SuiteAuthShell
      mark={<div>/* app mark */</div>}
      appName="Example App"
      introTitle="Sign in"
      introBody="Use your account to continue."
    >
      <form>{/* form fields */}</form>
    </SuiteAuthShell>
  );
}
