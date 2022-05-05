import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";



const DraftToHtml = (state: any) => {
    return draftToHtml(convertToRaw(state))
};


const HtmlToDraft = (state: any) => {
    return draftToHtml(convertToRaw(state))
};


const TextEditor = {
    DraftToHtml,
    HtmlToDraft
}

export default TextEditor