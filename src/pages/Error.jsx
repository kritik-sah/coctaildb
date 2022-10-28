import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main>
      <section className="container my-60 mx-auto w-11/12">

        <div className="flex flex-col items-center justify-center w-full h-72 space-y-4">
          <img src="/404.jpg" alt="No results found" className="max-h-60"/>
          <h3 className="text-5xl text-rose-700 font-bold">404</h3>
          <h3 className="text-3xl font-bold">Page not found</h3>
          <Link to='/'>
          <button className="primary-btn" >Back to Homepage</button>
          </Link>
        </div>


        
      </section>

    </main>
  );
};
export default Error;