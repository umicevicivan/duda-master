import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { HomePage } from './home/home.page';
import { ErrorPage } from './errors/error.page';
import { NotFoundPage } from './errors/not-found.page';
import AppLayout from './app.layout';
import { StudentFormPage } from './student-form/student-form.page';

export const router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} errorElement={<ErrorPage />} />
        <Route
          path='student-form'
          element={<StudentFormPage />}
          errorElement={<ErrorPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
};
