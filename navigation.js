const navigation = `
    <h2>Navigation</h2>
    
    <ul>
        <li><a href="index.html">Home</a></li>
    </ul>

    <h4>Projects</h4>
    <ul>
        <li><a href="embedded.html">Embedded</a></li>
        <li><a href="graphics.html">Graphics</a></li>
        <li><a href="unreal.html">Unreal Engine</a></li>
        <li><a href="others.html">Others</a></li>
        <li><a href="qt.html">Qt</a></li>
    </ul>

    <h4>Misc</h4>
    <ul>
        <li><a href="certificates.html">Certificates</a></li>
        <li><a href="blogs.html">Blogs</a></li>
    </ul>

    <h4>Links</h4>
    <ul>
        <li><a href="https://www.linkedin.com/in/rhn-127405227/" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/RoastedKaju" target="_blank">GitHub</a></li>
        <li><a href="https://haris-nauman.itch.io/" target="_blank">Itch.io</a></li>
        <li><a href="https://vimeo.com/user235186708" target="_blank">Vimeo</a></li>
        <li><a href="https://www.youtube.com/@RoastedKaju" target="_blank">YouTube</a></li>
    </ul>
`;

const nav = document.querySelector("nav");
nav.innerHTML = navigation;

const currentPath = window.location.pathname.replace(/\/$/, "");

const currentPage = currentPath === "" ? "index" : currentPath.split("/").pop().replace(/\.html$/, "");

nav.querySelectorAll("a").forEach(link => {const href = link.getAttribute("href");
    // Ignore external links
    if (!href || href.startsWith("http")) {
        return;
    }

    const linkPage = href
        .replace(/\.html$/, "")
        .replace(/\/$/, "");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});