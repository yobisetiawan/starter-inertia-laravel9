import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";



const DraftToHtml = (state: any) => {
    return draftToHtml(convertToRaw(state))
};


const HtmlToDraft = (html: any) => {

    const blocksFromHtml = htmlToDraft(html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    return EditorState.createWithContent(contentState);

};


const TextEditor = {
    DraftToHtml,
    HtmlToDraft
}

export default TextEditor