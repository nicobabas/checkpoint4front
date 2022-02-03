import { useState } from 'react';
import axios from 'axios';

const CreateBook = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const formData = new FormData();
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (image && name) {
      formData.append('image', image);
      formData.append('name', name);

      axios
        .post(`http://localhost:8000/book`, formData, config)
        .then(({ data }) => {
          if (data.error) setError(data.error);
          else {
            setError('');
            setName('');
            setImage('');
          }
        })
        .then(() => window.location.reload());
    } else setError('Tous les champs sont requis');
  };

  return (
    <div className="createpage">
      <div className="px-5 py-5 md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            {error && <p className="register-error">{error}</p>}
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <h2 className="mb-5 text-lg font-medium leading-6 text-gray-900">
                    Créer Votre Book
                  </h2>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium font-bold text-gray-700"
                  >
                    Titre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-3 border border-gray-300 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium font-bold text-gray-700"
                    >
                      Image
                    </label>
                    <div className="mt-3 flex rounded-md">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        onChange={handleImage}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    value="Send"
                    className="flex border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white btn btn-warning"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateBook;
