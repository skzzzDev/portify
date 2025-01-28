export function Footer() {
  return (
    <footer className="text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Portify. Todos os direitos reservados.</p>
        <p>
          <a href="/" className="hover:underline">Termos de Uso</a> | 
          <a href="/" className="hover:underline"> Política de Privacidade</a>
        </p>
      </div>
    </footer>
  );
}
