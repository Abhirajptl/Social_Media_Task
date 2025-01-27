import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Social Media Submission</h1>
      <UserForm />
      <hr className="my-6" />
      <AdminDashboard />
    </div>
  );
}

export default App;