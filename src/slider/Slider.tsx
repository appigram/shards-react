import { h, Component } from "preact"
import classNames from "classnames"
import nouislider from "nouislider"
import { HTMLTag, HTMLProps } from "../html"
interface SliderProps
  extends nouislider.Options,
    Omit<HTMLProps<"div">, "start" | "step"> {
  theme?: string
  cssPrefix?: string
  disabled?: boolean
  // tslint:disable:no-any
  onChange?(...args: any[]): any
  onEnd?(...args: any[]): any
  onSet?(...args: any[]): any
  onSlide?(...args: any[]): any
  onStart?(...args: any[]): any
  onUpdate?(...args: any[]): any
  // tslint:enable:no-any
}
/**
 * The slider component is powered behind the scenes by the [NoUiSlider](https://refreshless.com/nouislider/) library.
 */
class Slider extends Component<SliderProps, {}> {
  private sliderContainer: HTMLDivElement | null = null
  private slider?: nouislider.noUiSlider

  public componentDidMount() {
    if (this.props.disabled) {
      this.sliderContainer!.setAttribute("disabled", "true")
    } else {
      this.sliderContainer!.removeAttribute("disabled")
    }
    this.createSlider()
  }
  public componentDidUpdate() {
    if (this.props.disabled) {
      this.sliderContainer!.setAttribute("disabled", "true")
    } else {
      this.sliderContainer!.removeAttribute("disabled")
    }
    this.slider!.destroy()
    this.createSlider()
  }
  public componentWillUnmount() {
    this.slider!.destroy()
  }
  public createSlider() {
    const sliderContainer = this.sliderContainer!
    const slider = (this.slider = nouislider.create(sliderContainer, {
      ...this.props
    }))
    if (this.props.onUpdate) {
      slider.on("update", this.props.onUpdate)
    }
    if (this.props.onChange) {
      slider.on("change", this.props.onChange)
    }
    if (this.props.onSlide) {
      slider.on("slide", this.props.onSlide)
    }
    if (this.props.onStart) {
      slider.on("start", this.props.onStart)
    }
    if (this.props.onEnd) {
      slider.on("end", this.props.onEnd)
    }
    if (this.props.onSet) {
      slider.on("set", this.props.onSet)
    }
  }
  public render() {
    const { className, theme } = this.props
    const classes = classNames(className, theme && `slider-${theme}`)
    return (
      <div
        className={classes}
        ref={slider => {
          this.sliderContainer = slider
        }}
      />
    )
  }
}
export default Slider
