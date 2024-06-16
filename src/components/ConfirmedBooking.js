import NavigationBar from "./NavigationBar";



function ConfirmedBooking() {

  return (
    <>
      <NavigationBar/>
      <main className='confirmedBooking'>
          <h2>Thank you for Reserving a Table.</h2>
          <p>Please check your email for further details.</p>
      </main>
     
    </>
  );
}

export default ConfirmedBooking;
