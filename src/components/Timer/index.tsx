import React from "react"

interface State {
    countMin: string
    countSec: string
    countMs: string
}
interface Props {
}

export default class Timer extends React.Component<Props, State> {
    public state: State = {
        countMin: "00",
        countSec: "00",
        countMs: "00",
    }
    interval!: NodeJS.Timeout

    constructor(props: Props) {
        super(props)
        console.log(`constructor вызывается в самом начале создания
        создания компонента, чтобы инициализировать его начальные
        параметры - props, путем запроса super() к родительскому элементу,
        создавшего сам компонент.
        `)
    }

    componentDidMount() {
        console.log(`componentDidMount завершает процесс рождения
        компонента. В нем устанавливаются все слушатели событий.`)
        this.interval = setInterval(() => this.handleMSeconds(), 10)
    }
    shouldComponentUpdate() {
        console.log(`shouldComponentUpdate должен возвратить правду
        или ложь, на основании данных слушателей событий, после чего
        запускается или не запускается перерендер и метод апдейта
        компонента.
        `)
        return true
    }
    componentDidUpdate(prevProps: {}, prevState: State) {
        console.log(`componentDidUpdate завершает процесс апдейта.
        Не вызывается при первом рендере. Не вызывается, если
        shouldComponentUpdate() возвращает false. На основании сравнения
        предыдущих параметров пропсов и состояния, и новых параметров,
        происходит установка новых параметров, если они изменились.
        `)
    }
    componentWillUnmount() {
        console.log(`componentWillUnmount удаляет компонент из DOM.
        Здесь же удаляются все установленные слушатели событий.
        `)
        clearInterval(this.interval)
    }

    handleMinutes = () => {
        if (+this.state.countMin < 59) {
            this.setState({
                countMin: `${+this.state.countMin + 1}`.padStart(
                    2,
                    this.state.countMin
                ),
            })
        } else {
            this.setState({ countMin: "00" })
        }
    }
    handleSeconds = () => {
        if (+this.state.countSec < 59) {
            this.setState({
                countSec: `${+this.state.countSec + 1}`.padStart(
                    2,
                    this.state.countSec
                ),
            })
        } else {
            this.setState({ countSec: "00" })
            this.handleMinutes()
        }
    }
    handleMSeconds = () => {
        if (+this.state.countMs < 99) {
            this.setState({
                countMs: `${+this.state.countMs + 1}`.padStart(
                    2,
                    this.state.countMs
                ),
            })
        } else {
            this.setState({ countMs: "00" })
            this.handleSeconds()
        }
    }

    render(this: any) {
        console.log(`render вызывается на этапе начальной отрисовки
        компонента в DOM, и на этапе его апдейта.
        `)
        return (
            <div id="timer_container">
                <p>
                    <span>{this.state.countMin}</span> :{" "}
                    <span>{this.state.countSec}</span> :{" "}
                    <span>{this.state.countMs}</span>
                </p>
                <div id="elips"></div>
            </div>
        )
    }
}
