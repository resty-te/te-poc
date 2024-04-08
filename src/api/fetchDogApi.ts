import {useQuery} from '@tanstack/react-query';

export type IDogResponse = {
  message: string;
  status: string;
};

export const fetcRandomDog = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  const user: IDogResponse = {
    message: data?.message || '',
    status: data?.string || '',
  };
  return user;
};

export const useRandomDog = () => {
  return useQuery({queryKey: ['githubData'], queryFn: fetcRandomDog});
};
