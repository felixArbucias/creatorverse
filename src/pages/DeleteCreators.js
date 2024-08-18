import { supabase } from '../client';



export async function deleteCreator(id) {
    try {
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) throw error;
        window.location.reload();
        console.log(`Creator with id ${id} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting creator:', error.message);
    }
}