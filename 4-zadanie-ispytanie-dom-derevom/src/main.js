// Не забудьте перед отправкой изменить в module.exports = function main(game, start) {
export default function(html, css) {
    html.children[1].styles.color = 'rgb(255, 0, 0)';
    return html;
}
