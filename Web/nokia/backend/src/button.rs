use axum::http::StatusCode;

const BTN_1: [char; 1] = ['1'];
const BTN_2: [char; 4] = ['2','a', 'b', 'c'];
const BTN_3: [char; 4] = ['3','d', 'e', 'f'];
const BTN_4: [char; 4] = ['4','g', 'h', 'i'];
const BTN_5: [char; 4] = ['5','j', 'k', 'l'];
const BTN_6: [char; 4] = ['6','m', 'n', 'o'];
const BTN_7: [char; 5] = ['7','p', 'q', 'r', 's'];
const BTN_8: [char; 4] = ['8','t', 'u', 'v'];
const BTN_9: [char; 5] = ['9','w', 'x', 'y', 'z'];
const BTN_0: [char; 2] = ['0',' '];
const BTN_S: [char; 2] = ['*','+'];
const BTN_H: [char; 1] = ['#'];



pub struct Button {
    name: char,
    button: &'static [char],
    idx: usize,
}

impl Button {
    pub fn new(name: char) -> Result<Self, (StatusCode, String)> {
        let button: &[char] = match name {
            '1' => &BTN_1,
            '2' => &BTN_2,
            '3' => &BTN_3,
            '4' => &BTN_4,
            '5' => &BTN_5,
            '6' => &BTN_6,
            '7' => &BTN_7,
            '8' => &BTN_8,
            '9' => &BTN_9,
            '0' => &BTN_0,
            's' => &BTN_S,
            'h' => &BTN_H,
            _ => {
                return Err((
                    StatusCode::NOT_FOUND,
                    format!("button \"{}\" not found", name),
                ))
            }
        };
        Ok(Self {
            name,
            button,
            idx: 0,
        })
    }

    pub fn current(&self) -> char {
        self.button[self.idx]
    }

    pub fn advance(&mut self) {
        self.idx = (self.idx + 1) % self.button.len();
    }
}

impl PartialEq<char> for Button {
    fn eq(&self, other: &char) -> bool {
        self.name == *other
    }
}
