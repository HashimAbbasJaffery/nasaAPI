const galleryTemplate = (url, explanation, copyright, date) => {
    const exlanationSubstr = explanation.substr(0, 500) ;
    const position = exlanationSubstr.lastIndexOf(" ");
    return `
    <div class="col-lg-4">
    <div class="gallery-photo">
        <header>
            <div class="gallery-pic">
                <img src="${url}" style="width: 100%;" alt="">
            </div>
        </header>
        <div class="main-content" style="margin-top: 25px;">
            <p>${explanation.substr(0, position)}${( explanation.length > 500 ) ? "..." : ""}</p>
        </div>
        <hr>
        <footer>
            <div class="copyright">
                <p>Copyright: <b>${copyright}</b></p>
            </div>
            <div class="date-time">
                <p>
                    Time: 
                    <b><time datetime="${date}">${date}</time></b>
                </p>
            </div>
        </footer>
    </div>
</div>
    `
}

export default galleryTemplate;