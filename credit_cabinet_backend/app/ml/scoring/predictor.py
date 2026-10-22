from pathlib import Path

import joblib

from app.core.config import settings
from app.ml.scoring.features import prepare_features


class ModelUnavailableError(RuntimeError):
    pass


class CreditPredictor:
    def __init__(self):
        model_path = Path(settings.scoring_model_path)
        if not model_path.is_file():
            raise ModelUnavailableError(
                f"Файл скоринговой модели не найден: {model_path}. "
                "Обучите модель и положите артефакт по указанному пути."
            )
        try:
            self.model = joblib.load(model_path)
        except Exception as exc:
            raise ModelUnavailableError("Не удалось загрузить скоринговую модель") from exc
        self.version = settings.scoring_model_version

    def predict(self, values: dict[str, float]) -> float:
        features = prepare_features(values)
        try:
            prediction = self.model.predict([features])
            return float(prediction[0])
        except Exception as exc:
            raise ModelUnavailableError("Ошибка во время расчёта скорингового прогноза") from exc
