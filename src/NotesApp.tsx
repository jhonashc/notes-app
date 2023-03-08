import { AppRouter } from "./router";
import { NotesProvider } from "./features";

export const NotesApp: React.FC = (): JSX.Element => {
  return (
    <NotesProvider>
      <AppRouter />
    </NotesProvider>
  );
};
