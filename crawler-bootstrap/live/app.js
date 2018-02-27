const {
    JSDOM,
} = require("jsdom");

const $init = require("jquery");

const url = "http://www.technopolis.bg/bg//%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D0%BD%D0%B8-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B8-%D0%B8-%D0%A2%D0%B0%D0%B1%D0%BB%D0%B5%D1%82%D0%B8/%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D0%BD%D0%B8-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B8/c/P11040101?pageselect=1000&page=200&q=:price-asc&text=&layout=List&sort=price-asc";

const extractPageUrls = async () => {
    const dom = await JSDOM.fromURL(url);
    const $ = $init(dom.window);
    const pageLinksSelector = ".paging a";
    return [...$(pageLinksSelector)].map((link) => $(link))
        .map(($link) => $link.attr("href"));
};

const run = async () => {
    const pageUrls = await extractPageUrls();

    const phoneUrls = await Promise.all(
        pageUrls.map(url => extractPhones(url))
    );
};

run();