from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Умный кредитный кабинет API"
    database_url: str = "sqlite:///./credit_cabinet.db"
    upload_dir: str = "data/uploads"
    scoring_model_path: str = "ml_models/scoring/model.joblib"
    scoring_model_version: str = "local-unconfigured"
    max_upload_mb: int = 15
    # Frontend origins allowed to call the API from a browser. "*" also covers file:// (Origin: null).
    cors_origins: list[str] = ["*"]

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
