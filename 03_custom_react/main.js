const reactElement = {
    type: 'a',
    props: {
        href: 'https://example.com',
        target: '_blank'
    },
    children: "Click Here"
}

function customRender (reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

customRender(reactElement, mainContainer)

const mainContainer = document.getElementById('#root')