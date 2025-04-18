import {create} from 'zustand'
import { supabaseClient } from '../providers/supabaseClient'

type TAuthor = {
    id: number;
    last_name:string;
}

export interface IStore{
    authors:TAuthor[];
    loading:boolean;
    error?:string | null;
    getAuthors:()=>Promise<void>
}





export const useStore = create<IStore>((set)=>({
    authors:[],
    error:null,
    loading:false,
    getAuthors: async()=>{
        set({loading:true})
        const {data, error} = await supabaseClient.from('authors_example').select()
        if(error) {
            set({error: error.message, loading:false})            
        }
        set({authors: data ?? [], loading:false})
    }
}))