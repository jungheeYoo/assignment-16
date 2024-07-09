// import React from 'react';

// import { useForm } from 'react-hook-form';
// import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

// interface IForm {
//   toGoCountry: string;
// }

// interface ICountry {
//   text: string;
//   id: number;
//   category: 'TO_GO' | 'GONE' | 'FAVORITE';
// }

// const toGoState = atom<ICountry[]>({
//   key: 'toGo',
//   default: [],
// });

// const goneState = atom<ICountry[]>({
//   key: 'goneState',
//   default: [],
// });

// const favoriteState = atom<ICountry[]>({
//   key: 'favorite',
//   default: [],
// });

// function Country() {
//   const togos = useRecoilValue(toGoState);
//   const setTogos = useSetRecoilState(toGoState);
//   const gone = useRecoilValue(goneState);
//   const setGone = useSetRecoilState(goneState);
//   const favorite = useRecoilValue(favoriteState);
//   const setFavorite = useSetRecoilState(favoriteState);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<IForm>();

//   const handleValid = ({ toGoCountry }: IForm) => {
//     const newCountry = {
//       text: toGoCountry,
//       id: Date.now(),
//       category: 'TO_GO',
//     };
//     setTogos((prev) => [newCountry, ...prev]);
//     setValue('toGoCountry', '');
//   };

//   const removeCountry = (
//     id: number,
//     setList: React.Dispatch<React.SetStateAction<ICountry[]>>
//   ) => {
//     setList((prev) => prev.filter((country) => country.id !== id));
//   };

//   const moveCountry = (
//     id: number,
//     from: React.Dispatch<React.SetStateAction<ICountry[]>>,
//     to: React.Dispatch<React.SetStateAction<ICountry[]>>,
//     newCategory: ICountry['category']
//   ) => {
//     let movedCountry: ICountry | undefined;
//     from((prev) => {
//       movedCountry = prev.find((country) => country.id === id);
//       return prev.filter((country) => country.id !== id);
//     });
//     if (movedCountry) {
//       to((prev) => [{ ...movedCountry!, category: newCategory }, ...prev]);
//     }
//   };

//   return (
//     <main>
//       <h2>내가 가고싶은 나라들</h2>
//       <form
//         style={{ display: 'flex', flexDirection: 'column' }}
//         onSubmit={handleSubmit(handleValid)}
//       >
//         <input
//           {...register('toGoCountry', {
//             required: '😣required!',
//           })}
//           placeholder="이름"
//         />
//         <span>{errors?.toGoCountry?.message as string}</span>
//         <button>가자!</button>
//       </form>
//       <ul>
//         {togos.map((togo) => (
//           <li key={togo.id}>
//             {togo.text}
//             <button
//               onClick={() => moveCountry(togo.id, setTogos, setGone, 'GONE')}
//             >
//               ✅
//             </button>
//             <button onClick={() => removeCountry(togo.id, setTogos)}>🗑</button>
//           </li>
//         ))}
//       </ul>
//       <h2>내가 가본 나라들</h2>
//       <ul>
//         {gone.map((gone) => (
//           <li key={gone.id}>
//             {gone.text}
//             <button
//               onClick={() =>
//                 moveCountry(gone.id, setGone, setFavorite, 'FAVORITE')
//               }
//             >
//               👍
//             </button>
//             <button
//               onClick={() => moveCountry(gone.id, setGone, setTogos, 'TO_GO')}
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//       <h2>내가 좋아하는 나라들</h2>
//       <ul>
//         {favorite.map((country) => (
//           <li key={country.id}>
//             {country.text}
//             <button
//               onClick={() =>
//                 moveCountry(country.id, setFavorite, setGone, 'GONE')
//               }
//             >
//               👎
//             </button>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

// export default Country;

//////////////////////////////////////////
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

// const toGoState = atom({
//   key: 'toGo',
//   default: [],
// });

// const goneState = atom({
//   key: 'goneState',
//   default: [],
// });

// const favoriteState = atom({
//   key: 'favorite',
//   default: [],
// });

// function Country() {
//   const togos = useRecoilValue(toGoState);
//   const setTogos = useSetRecoilState(toGoState);
//   const gone = useRecoilValue(goneState);
//   const setGone = useSetRecoilState(goneState);
//   const favorite = useRecoilValue(favoriteState);
//   const setFavorite = useSetRecoilState(favoriteState);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const handleValid = ({ toGoCountry }) => {
//     const newCountry = {
//       text: toGoCountry,
//       id: Date.now(),
//       category: 'TO_GO',
//     };
//     setTogos((prev) => [newCountry, ...prev]);
//     setValue('toGoCountry', '');
//   };

//   const removeCountry = (id, setList) => {
//     setList((prev) => prev.filter((country) => country.id !== id));
//   };

//   const moveCountry = (id, from, to, newCategory) => {
//     let movedCountry;
//     from((prev) => {
//       movedCountry = prev.find((country) => country.id === id);
//       return prev.filter((country) => country.id !== id);
//     });
//     if (movedCountry) {
//       to((prev) => [{ ...movedCountry, category: newCategory }, ...prev]);
//     }
//   };

//   return (
//     <main>
//       <h2>내가 가고싶은 나라들</h2>
//       <form
//         style={{ display: 'flex', flexDirection: 'column' }}
//         onSubmit={handleSubmit(handleValid)}
//       >
//         <input
//           {...register('toGoCountry', {
//             required: '😣required!',
//           })}
//           placeholder="이름"
//         />
//         <span>{errors?.toGoCountry?.message}</span>
//         <button>가자!</button>
//       </form>
//       <ul>
//         {togos.map((togo) => (
//           <li key={togo.id}>
//             {togo.text}
//             <button
//               onClick={() => moveCountry(togo.id, setTogos, setGone, 'GONE')}
//             >
//               ✅
//             </button>
//             <button onClick={() => removeCountry(togo.id, setTogos)}>🗑</button>
//           </li>
//         ))}
//       </ul>
//       <h2>내가 가본 나라들</h2>
//       <ul>
//         {gone.map((gone) => (
//           <li key={gone.id}>
//             {gone.text}
//             <button
//               onClick={() => moveCountry(gone.id, setGone, setFavorite, 'FAVORITE')}
//             >
//               👍
//             </button>
//             <button
//               onClick={() => moveCountry(gone.id, setGone, setTogos, 'TO_GO')}
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//       <h2>내가 좋아하는 나라들</h2>
//       <ul>
//         {favorite.map((country) => (
//           <li key={country.id}>
//             {country.text}
//             <button
//               onClick={() => moveCountry(country.id, setFavorite, setGone, 'GONE')}
//             >
//               👎
//             </button>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

// export default Country;

////////////////////////////////////////////

import React from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const toGoState = atom({
  key: 'toGo',
  default: [],
});

const goneState = atom({
  key: 'goneState',
  default: [],
});

const favoriteState = atom({
  key: 'favorite',
  default: [],
});

function Country() {
  const toGoCountries = useRecoilValue(toGoState);
  const setToGoCountries = useSetRecoilState(toGoState);
  const goneCountries = useRecoilValue(goneState);
  const setGoneCountries = useSetRecoilState(goneState);
  const favoriteCountries = useRecoilValue(favoriteState);
  const setFavoriteCountries = useSetRecoilState(favoriteState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleValid = ({ toGoCountry }) => {
    const newCountry = {
      text: toGoCountry,
      id: Date.now(),
      category: 'TO_GO',
    };
    setToGoCountries((prev) => [newCountry, ...prev]);
    setValue('toGoCountry', '');
  };

  const removeCountry = (id, listState) => {
    listState((prev) => prev.filter((country) => country.id !== id));
  };

  const moveCountry = (id, fromState, toState, newCategory) => {
    let movedCountry;
    fromState((prev) => {
      movedCountry = prev.find((country) => country.id === id);
      return prev.filter((country) => country.id !== id);
    });
    if (movedCountry) {
      toState((prev) => [{ ...movedCountry, category: newCategory }, ...prev]);
    }
  };

  return (
    <main>
      <h2>내가 가고싶은 나라들</h2>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(handleValid)}
      >
        <input
          {...register('toGoCountry', {
            required: '😣required!',
          })}
          placeholder="이름"
        />
        <span>{errors?.toGoCountry?.message}</span>
        <button>가자!</button>
      </form>
      <ul>
        {toGoCountries.map((togo) => (
          <li key={togo.id}>
            {togo.text}
            <button
              onClick={() =>
                moveCountry(togo.id, setToGoCountries, setGoneCountries, 'GONE')
              }
            >
              ✅
            </button>
            <button onClick={() => removeCountry(togo.id, setToGoCountries)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
      <h2>내가 가본 나라들</h2>
      <ul>
        {goneCountries.map((gone) => (
          <li key={gone.id}>
            {gone.text}
            <button
              onClick={() =>
                moveCountry(
                  gone.id,
                  setGoneCountries,
                  setFavoriteCountries,
                  'FAVORITE'
                )
              }
            >
              👍
            </button>
            <button
              onClick={() =>
                moveCountry(
                  gone.id,
                  setGoneCountries,
                  setToGoCountries,
                  'TO_GO'
                )
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <h2>내가 좋아하는 나라들</h2>
      <ul>
        {favoriteCountries.map((country) => (
          <li key={country.id}>
            {country.text}
            <button
              onClick={() =>
                moveCountry(
                  country.id,
                  setFavoriteCountries,
                  setGoneCountries,
                  'GONE'
                )
              }
            >
              👎
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Country;
