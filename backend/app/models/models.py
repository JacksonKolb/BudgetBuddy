from datetime import datetime
from pydantic import BaseModel, validator

from datetime import datetime
from pydantic import BaseModel, Field, Decimal

class Transaction(BaseModel):
    amount: Decimal = Field(..., max_digits=10, decimal_places=2)
    description: str
    created_at: datetime

    def is_positive_transaction(self) -> bool:
        return self.amount > 0

    @validator('amount')
    def validate_amount(cls, value):
        str_value = str(value)
        if '.' in str_value:
            integer_part, decimal_part = str_value.split('.')
            total_length = len(integer_part) + len(decimal_part)
        else:
            total_length = len(str_value)
        
        if total_length > 10:
            raise ValueError('max_digits exceeded')
        if value.as_tuple().exponent < -2:
            raise ValueError('decimal_places exceeded')
        return value
