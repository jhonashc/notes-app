import { AppRouter } from "./router";
import { NotesProvider } from "./modules";

export const NotesApp: React.FC = (): JSX.Element => {
  return (
    <NotesProvider>
      <AppRouter />
    </NotesProvider>
  );
};
