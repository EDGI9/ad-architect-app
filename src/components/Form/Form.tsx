import { Card } from "../Card/Card";
import { TextInput } from '../TextInput/TextInput';
import { TextArea } from '../TextArea/TextArea';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import "./Form.scss";

//@ts-ignore
export function Form(props) {
    return (
        <Card backgroundColor="#FFF" borderRadius={5}>
            <form data-testid="qa-form" className="c-form">
                <header className="c-form__header">
                    <Title type='h1' text='Let’s start a conversation!'/>
                    <p>Get in touch for any questions and ideas you may have and we’ll work together to find the best solution.</p>
                </header>
                <section className="c-form__main-section">
                    <TextInput placeholder="Name" type="secondary"/> 
                    <TextInput placeholder="Email" type="secondary"/> 
                    <TextArea placeholder="Message" type="secondary"/>
                </section>
                <footer className="c-form__footer">
                    <Button text='Send Message'/>
                </footer>
            </form>
        </Card>
    )
}