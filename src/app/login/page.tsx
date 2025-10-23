"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Erro ao fazer login. Credenciais inválidas.");
      } else {
        router.push("/aplicacao");
        toast.success("Login realizado com sucesso!");
      }
    } catch {
      toast.error(
        "Erro ao fazer login. Ocorreu um erro ao tentar fazer login."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: "url('/assets/hero-postos.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(100px)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-md bg-white/80 p-10 rounded-lg border-2 border-black"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="space-y-2">
          <Label htmlFor="signin-email">Email</Label>
          <Input
            id="signin-email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="focus:border-primary focus:ring-2 !focus:ring-primary/20 !focus:ring-offset-0 border-black border-2 "
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signin-password">Senha</Label>
          <Input
            id="signin-password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </section>
  );
}
