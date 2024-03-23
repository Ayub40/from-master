
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import HookForm from './Components/HookForm/HookForm'
import RafForm from './Components/RafForm/RafForm'
import StatefulFrom from './Components/StatefulForm/StatefulFrom'
import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSingUpSubmit = data => {
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }

  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>




      <SimpleForm></SimpleForm>
      <StatefulFrom></StatefulFrom>
      <RafForm></RafForm>
      <HookForm></HookForm>
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm >
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm >




    </>

  )
}

export default App


