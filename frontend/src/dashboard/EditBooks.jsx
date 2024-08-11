import React, { useState } from 'react'
import { Label, Textarea, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Programming',
    'Science Fiction',
    'Horror',
    'History',
    'Self-help',
    'Autobiography',
    'Memoir',
    'Historical Fiction',
    'Bibliography',
    'Business',
    'Children Books',
    'Travel',
    'Religion',
    'Art and Design'
  ];

  const [selectBookCategory, setSelectBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectBookCategory(event.target.value);
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    };

    // update book data
    fetch(`http://localhost:5000/book/${id}`,{
      method:'PATCH',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(updateBookObj)
    }


    ).then(res=>res.json()).then(data=>{
      
      alert("Book data is updated Successfully!");
    })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-5'>
          {/* book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required 
            defaultValue={bookTitle}/>
          </div>

          {/* book author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName} />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-5'>
          {/* book image url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required 
            defaultValue={imageURL}/>
          </div>

          {/* categories */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Categories" />
            </div>
            <select id='inputState' name='category' className='w-full rounded' value={selectBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </div>

        {/* third row */}
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id='bookDescription'
              name='bookDescription'
              placeholder='Write your book Description...'
              required
              className='w-full'
              rows={5}
              defaultValue={bookDescription}
            />
          </div>
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required  defaultValue={bookPDFURL}/>
        </div>

        {/* button */}
        <Button type='submit' className='mt-5 bg-green-500 hover:bg-green-600'>
          Update Book
        </Button>
      </form>
    </div>
  );
}

export default EditBooks;

