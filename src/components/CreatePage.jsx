import { useState } from 'react';
import axios from 'axios';

const CreatePage = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [book_id, setBook_id] = useState('3');
  const [error, setError] = useState('');

  const formData = new FormData();
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };
  console.log(image);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);
    if (image || title || text || book_id) {
      formData.append('image', image);
      formData.append('title', title);
      formData.append('text', text);
      formData.append('book_id', book_id);

      axios
        .post('http://localhost:8000/addpage', formData, config)
        .then(({ data }) => {
          if (data.error) setError(data.error);
          else {
            setError('');
            setImage('');
            setTitle('');
            setText('');
            setBook_id('');
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
                    Créer sa page
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
                    onChange={(e) => setTitle(e.target.value)}
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
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <h2 className="mb-5 text-lg font-medium leading-6 text-gray-900">
                    Créer sa page
                  </h2>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium font-bold text-gray-700"
                  >
                    Texte
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-3 border border-gray-300 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    value="Send"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 "
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
export default CreatePage;
