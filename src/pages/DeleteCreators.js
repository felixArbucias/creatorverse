import { supabase } from './client'; // Adjust the path to your supabase client file

export async function deleteCreator(id) {
    try {
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) throw error;
        console.log(`Creator with id ${id} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting creator:', error.message);
    }
}