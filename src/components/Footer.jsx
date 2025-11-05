export default function Footer() {
  return (
    <footer className="bg-nasi-dark text-white text-center py-6">
      <p className="text-sm">
        © {new Date().getFullYear()} NASI Technologies. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Designed with ❤️ by NASI Tech Team.
      </p>
    </footer>
  );
}
