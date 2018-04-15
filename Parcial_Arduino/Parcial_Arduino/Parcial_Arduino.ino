int pin = 2;
int value = 0;
int i=0;
char reinicio;

void setup() {
  Serial.begin(9600);   //iniciar puerto serie
  pinMode(pin, INPUT_PULLUP);  //definir pin como entrada
}
 
void loop(){
  value = digitalRead(pin);  //lectura digital de pin
   Serial.begin(9600); 
  reinicio=Serial.read();
  if(reinicio=='R'){
    i=0;
  }
  
 
  if (value==CHANGE){     
  }
  else{
    
     i=i+1;
     Serial.print(i);
     //Serial.write(i);
     Serial.end();
    }
   
  delay(500);
}
