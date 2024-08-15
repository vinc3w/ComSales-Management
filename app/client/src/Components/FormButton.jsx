import LoadingCircle from "./LoadingCircle";

function FormButton({ isLoading, text }) {

    return isLoading ?
        <button type="submit" className="disable">{ <LoadingCircle /> }</button> :
        <button type="submit">{ text }</button>
}

export default FormButton;
