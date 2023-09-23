import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '@services/api-client';

interface IData<T> {
  count: number;
  open_count: number;
  finalResult: T[];
}

interface FetchResponse<T> {
  status: boolean;
  data: IData<T>;
}

const useData = <T, U>(endpoint: string, query?: U) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchData = (page: number) => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, params: { ...query, page } })
      .then((res) => {
        setData(res.data.data.finalResult);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetchData(0);

    return () => controller.abort();
  }, []);

  return { data, error, isLoading, fetchData };
};

export default useData;
