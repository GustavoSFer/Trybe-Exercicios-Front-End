from abc import ABC, abstractmethod

class ManipuladorDeLog(ABC):
  @abstractmethod
  def log(clas, msg):
    raise NotImplementedError

class LogEmArquivo(ManipuladorDeLog):
  def log(clas, msg):
    print(msg)