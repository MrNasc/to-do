import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITask {                       
    id: number
    title: string
    isCompleted: boolean
    dueDate: Date
}

const getAll = async (): Promise<ITask[] | ApiException> => {     
    try {
        const { data } = await Api().get('/tasks');                    
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar os registros.')
    }
};

const getById = async (id: number): Promise<ITask | ApiException> => {
    try {
        const { data } = await Api().get(`/tasks/${id}`);                    
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar o registro.')
    }
};

const create = async (dataToCreate: Omit<ITask, 'id'>): Promise<ITask | ApiException> => {    
    try {
        const { data } = await Api().post<any>('/tasks', dataToCreate);                    
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar o registro.')
    }
};

const updateById = async (id: number, dataToUpdate: ITask): Promise<ITask | ApiException> => {
    try {
        const { data } = await Api().put(`/tasks/${id}`, dataToUpdate);                    
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar o registro.')
    }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tasks/${id}`);                    
        return undefined;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar o registro.')
    }
};


export const TasksService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById
};
