import React from 'react'
import { useLocation, useParams } from 'react-router'

const Details = () => {

  const { id } = useParams();

  const { state } = useLocation();

  const { strYoutube } = state;

  const key = strYoutube.split('=')[1];


  return (

    <div className=' bg-blue-gray-500 grid grid-cols-3 space-x-3 py-10 msm:grid-cols-1 mmd:grid-cols-2 '>


      <div className='  h-[400px] w-[450px] px-6 pt-9'>
        <h1 className='font-bold text-lg text-center '>{state.strMeal}</h1>
        <img className='py-5' src={state.strMealThumb}
          alt="" />
        <div className='font-extrabold text-white'>
          <p>Categrory :{state.strCategory}</p>
          <p>Orgins :{state.strArea}</p>
          <p>Tags :{state.strTags}</p>
        </div>

      </div>


      <div className='text-center py-9 '>

        <h1 className='text-lg font-bold underline px-6 '>Ingredient</h1>
        <div className=' text-yellow-500'>
          <p>{state.strIngredient1}</p>
          <p>{state.strIngredient2}</p>
          <p>{state.strIngredient3}</p>
          <p>{state.strIngredient4}</p>
          <p>{state.strIngredient5}</p>
          <p>{state.strIngredient6}</p>
          <p>{state.strIngredient7}</p>
          <p>{state.strIngredient8}</p>
        </div>
        <div>

          <h1 className='text-lg font-bold underline px-6 pt-9'>Measures</h1>
          <div className=' text-yellow-500'>
            <p>{state.strMeasure1}</p>
            <p>{state.strMeasure2}</p>
            <p>{state.strMeasure3}</p>
            <p>{state.strMeasure4}</p>
            <p>{state.strMeasure5}</p>
            <p>{state.strMeasure6}</p>
            <p>{state.strMeasure7}</p>
            <p>{state.strMeasure8}</p>

          </div>

        </div>

      </div>

      <div className=''>
        <h1 className='text-lg font-bold underline  px-6 pt-9 '>Instructions</h1>
        <p className='text-yellow-500'>{state.strInstructions}</p>
      </div>

      <iframe height="250px" width="500px" src={`https://www.youtube.com/embed/${key}?rel=0`} allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe>








    </div>

  )
}

export default Details