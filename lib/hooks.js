import useSWR from 'swr'
import fetcher from './fetch'

export function useCurrentUser(){
const {data, mutate} = useSWR('/api/user', fetcher)
const user = data?.user;
return [user, {mutate}];
}

export function useUser(){
    const {data} = useSWR('/api/user/${id}', fetcher)
    return data?.user;
}

export function useCurrentComments(url){
    const {data, mutate} = useSWR(url, fetcher)
    const comment = data?.comment;
    return [comment, {mutate}];
}