import checkAuth from "@/app/actions/auth";
import FormCreateEventComponent from "@/components/FormCreateEventComponent/FormCreateEventComponent";

async function AddEventPage() {
    await checkAuth()
    return (
        <div>
            <div className="create-event">
                <div className="create-event__title">Добавить новое событие</div>
                <FormCreateEventComponent />
            </div>
        </div>
    );
}
export default AddEventPage