import { useForm } from 'react-hook-form';
import {
  atom,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

interface IForm {
  toGo: string;
}

interface IToGo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

const toGoState = atom<IToGo[]>({
  key: 'toGo',
  default: [],
});



function App() {
  const togos = useRecoilValue(toGoState); 
  const setTogos = useSetRecoilState(toGoState);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
  } = useForm<IForm>();
  const handleValid = ({ toGo }: IForm) => {
    setTogos((setTogo) => [
      { text: toGo, id: Date.now(), category: 'TO_DO' },
      ...setTogo,
    ]);
    setValue('toGo', '');
    if (toGo.toGoCountry === '') {
      setError(
        'toGoCountry',
        { message: 'Password are not the same' },
        { shouldFocus: true }
      );
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
            required: '이름을 입력해주세요',
          })}
          placeholder="이름"
        />
        <button>가자!</button>
      </form>
      <ul>
        {togos.map((togo) => (
          <li key={togo.id}>{togo.text}</li>
        ))}
      </ul>
      <h2>내가 가본 나라들</h2>
      <h2>내가 좋아하는 나라들</h2>
    </main>
  );
}

export default App;