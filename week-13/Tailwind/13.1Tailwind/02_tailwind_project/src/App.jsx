import Button from "./components/Button";
import Input from "./components/Input";
export default function App() {
  return (
    <div>
      <div className="h-screen bg-blue-700">
        <br></br>
        <Input type="text" placeholder="username"></Input>
        <Button disabled={false}>Sign up</Button>
      </div>
    </div>
  );
}
