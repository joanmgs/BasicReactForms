import '../styles/App.css';
import ControlledForm from '../component/ControlledForm.jsx';
import NoControllerForm from '../component/NoControlledForm';
import { useState } from 'react';

function App() {
  const [changeForm, setChangeForm] = useState(true);

  const handleChangeForm = () => setChangeForm(!changeForm);

  return (
    <div className="App">
      {changeForm ? <ControlledForm /> : <NoControllerForm />}
      <button className='btn-change-form' onClick={handleChangeForm}>
        Change Form
      </button>
    </div>
  );
}

export default App;
