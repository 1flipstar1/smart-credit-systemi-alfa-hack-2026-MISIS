# Архитектура ML

## Поток обработки документов

file_path -> classify_document -> extract_fields -> validate_fields -> process_document response

```
+----------------+     +---------------+     +---------------+
| Classifier     | --> | Extractor     | --> | Validator     |
+----------------+     +---------------+     +---------------+
        |                     |                     |
        v                     v                     v
  document_type          extraction            validation
```

## Поток скоринга

values -> CreditPredictor.predict -> policy.resolve -> decision
"""