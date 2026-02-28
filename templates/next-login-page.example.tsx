import { SuiteAuthShell } from "@/components/suite-auth/SuiteAuthShell";

export default function ExampleLogin() {
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
