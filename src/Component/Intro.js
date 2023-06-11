import { Container, Row, Col } from 'react-bootstrap';
import "../style/style.css"

const Intro = () => {
    return(
        <div className='intro'>
            <Container className='d-flex'>
                <Row>
                    <Col>
                        <div className="paragraf">Hello</div>
                        <div className="title">I'm <span className='text-danger'>Zenal</span> Abidin</div>
                        <div className="paragraf">Berpengalaman sebagai Front End Website Developer. </div>
                        <div className="paragraf">Memiliki pengetahuan mendalam akan MERN Stack.</div>
                        <div className="paragraf">Dapat bekerjasama dan berkomunikasi dengan baik.</div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Intro;