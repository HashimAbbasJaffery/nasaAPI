import dispatch from "./index.js";
import { getElement, insertData } from "./utils/DOMselector.js";
import key from "./utils/key.js";

const pic = () => {
    dispatch(key)
            .then(res => {
                console.log(res);
                const data = res.data;
                const { url, explanation, title } = data;
                const elementsData = {
                    ".photo img": {
                        content: url,
                        type: "src"
                    },
                    ".meta-detail header h1": {
                        content: title
                    },
                    ".explanation p": {
                        content: explanation
                    }
                }

                for(let elementData in elementsData) {
                    const attributes = elementsData[elementData];
                    insertData(
                        elementData, 
                        attributes.content, 
                        attributes?.type ?? "textContent"
                    );
                }

            })
            .catch(err => {
                console.log(err);
            })
}
export default pic;