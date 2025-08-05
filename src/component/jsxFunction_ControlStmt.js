export default function JSXFunctionWithControlStmt() {
  const user = { firstName: 'Raj', lastName: 'Kumar' };
  function FormatName(user) {
    return 'Hello ' + user.firstName + ' ' + user.lastName;
  }

  function GetGreeting(user) {
    if (user) {
      return FormatName(user);
    } else {
      return 'Hello Guest'; 
    }
  }

  return (
    <div>
      <h2>{GetGreeting(user)}</h2>
      <h2>{GetGreeting()}</h2> 
    </div>
  );
}
