import React, { useState } from 'react'
import { Label, Textarea, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'programming',
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
  ]

  const [selectBookCategory, setselectBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    // event.preventDefault();
    setselectBookCategory(event.target.value);
  }
  // handle book submit

  const handleBookSubmit=(event)=>{
    event.preventDefault();
    
    const form = event.target;
    const bookTitle= form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, 
       category , bookDescription, bookPDFURL 
  }
  // console.log(bookObj);


  // send data to db
  fetch('http://localhost:5000/upload-book',{
    method:"POST" ,
    headers:{
    "Content-Type":"application/json",
    },
    body: JSON.stringify(bookObj)
  }).
  then(res=> res.json()).then(data=>{
    alert("Book uploaded successfully");
    form.reset();
  })

}

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[800px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-5'>
          {/* book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>

          {/* book author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-5'>
          {/* book image url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
          </div>

          {/* categories */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Categories" />
            </div>
            <select id='inputState' name='category' className='w-full rounded' value={selectBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>
                )}
            </select>
          </div>
        </div>

        {/* third row */}
        <div>
          <div >
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id='bookDescription'
            name='bookDescription'
            placeholder='Write your book Description...'
            required
             className='w-full'
            rows={5}/>            
          </div>
        </div>

        {/* book pdf link */}
       
          <div >
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required />
          </div>

          {/* button */}

          <Button type='submit' className='mt-5 bg-green-500 hover:bg-green-600'>
            Upload Book
          </Button>



      </form>
    </div>
  )
}

export default UploadBook