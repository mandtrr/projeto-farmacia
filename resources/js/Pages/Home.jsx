import { Button } from "@/Components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={() => alert("Botão clicado!")}>Click me</Button>
    </div>
  );
}
